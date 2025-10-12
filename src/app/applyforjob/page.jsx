'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { ref, push, set} from 'firebase/database';
import { database } from '../../lib/firebase';
import { useForm } from 'react-hook-form';
import { FaArrowLeft, FaPaperPlane, FaUpload } from 'react-icons/fa';
import Link from 'next/link';

// Add error boundary for better error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in JobApplicationPage:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="text-center p-8 max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-700 mb-6">
              We're sorry, but there was an error processing your application. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const JobApplicationForm = ({ jobTitle }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = async (data) => {
    try {
      // Add job title and metadata to the form data
      const applicationData = {
        ...data,
        jobTitle,
        submittedAt: new Date().toISOString(),
        status: 'new',
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : '',
        timestamp: Date.now()
      };

      // Save to Firebase Realtime Database
      const applicationsRef = ref(database, 'jobApplications');
      const newApplicationRef = push(applicationsRef);

      await set(newApplicationRef, applicationData);
      alert('Application submitted successfully!');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  if (!isClient) {
    return <LoadingFallback />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/careers"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <FaArrowLeft className="mr-2" /> Back to Careers
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Apply for {jobTitle}
          </h1>
          <p className="text-gray-600">
            Please fill out the form below to submit your application.
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 divide-y divide-gray-200">
              <div className="space-y-8 divide-y divide-gray-200">
                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                  <p className="mt-2 text-gray-600">
                    Please provide your personal details to apply for {jobTitle}.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      {...register('fullName', { required: 'Full name is required' })}
                      className={`w-full px-4 py-3 text-base rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.fullName ? 'border-red-400' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        },
                      })}
                      className={`w-full px-4 py-3 text-base rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? 'border-red-400' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9+\- ]+$/,
                          message: 'Please enter a valid phone number',
                        },
                      })}
                      className={`w-full px-4 py-3 text-base rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.phone ? 'border-red-400' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* LinkedIn Profile */}
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn Profile
                      <span className="ml-1 text-xs text-gray-500">(optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                      <input
                        type="url"
                        id="linkedin"
                        {...register('linkedin')}
                        className="w-full pl-10 px-4 py-3 text-base rounded-lg border-2 border-gray-300 hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="linkedin.com/in/username"
                      />
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="pt-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Cover Letter</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Tell us why you'd be a great fit for this position.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="mt-1">
                      <textarea
                        rows={6}
                        id="coverLetter"
                        {...register('coverLetter', { required: 'Cover letter is required' })}
                        className={`shadow-sm block w-full rounded-md border ${
                          errors.coverLetter ? 'border-red-300' : 'border-gray-300'
                        } focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        placeholder="I'm excited to apply for this position because..."
                      />
                      {errors.coverLetter && (
                        <p className="mt-1 text-sm text-red-600">{errors.coverLetter.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="pt-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Resume/CV</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Upload your resume or CV (PDF, DOC, DOCX, max 5MB)
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="resume"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="resume"
                              name="resume"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              {...register('resume', { required: 'Resume is required' })}
                              className="absolute opacity-0"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                      </div>
                    </div>
                    {errors.resume && (
                      <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        <FaPaperPlane className="-ml-1 mr-2 h-5 w-5" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobApplicationPage = ({ searchParams }) => {
  // Properly handle searchParams with React.use()
  const params = React.use(searchParams);
  const jobTitle = params.position || 'this position';
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingFallback />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <JobApplicationForm jobTitle={jobTitle} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default JobApplicationPage;
