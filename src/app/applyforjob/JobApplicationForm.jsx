'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft, FaPaperPlane, FaUpload } from 'react-icons/fa';
import Link from 'next/link';
import { ref, push, set } from 'firebase/database';
import { database } from '@/lib/firebase';

const JobApplicationForm = () => {
  const searchParams = useSearchParams();
  const jobTitle = searchParams.get('title') || 'the position';
  const department = searchParams.get('dept') || '';
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

  const onSubmit = async (data) => {
    console.log('Form data:', data);
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Check if database is initialized
      if (!database) {
        throw new Error('Database is not initialized');
      }

      console.log('Database reference:', database);
      
      // Create a new application reference
      const applicationsRef = ref(database, 'jobApplications');
      console.log('Applications reference:', applicationsRef);
      
      // Push a new application
      const newApplicationRef = push(applicationsRef);
      console.log('New application reference:', newApplicationRef);
      
      // Prepare application data
      const applicationData = {
        ...data,
        jobTitle: jobTitle,
        department: department,
        appliedAt: new Date().toISOString(),
        status: 'new'
      };
      
      console.log('Saving application data:', applicationData);
      
      // Save the data
      await set(newApplicationRef, applicationData);
      
      console.log('Application saved successfully');
      reset();
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
        fullError: error
      });
      setSubmitError(`Failed to submit application: ${error.message}`);
      alert(`Failed to submit application. Please try again. Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-6">
            <Link href="/careers" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
              <FaArrowLeft className="mr-2" /> Back to Careers
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Apply for {jobTitle}</h1>
            {department && <p className="text-gray-600 mt-1">Department: {department}</p>}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register('fullName', { required: 'Full name is required' })}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.fullName ? 'border-red-500' : ''
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9\-+()\s]+$/,
                      message: 'Invalid phone number',
                    },
                  })}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  {...register('experience', { required: 'Please select years of experience' })}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.experience ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select years</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                Cover Letter *
              </label>
              <div className="mt-1">
                <textarea
                  id="coverLetter"
                  rows={4}
                  {...register('coverLetter', {
                    required: 'Cover letter is required',
                    minLength: {
                      value: 50,
                      message: 'Cover letter should be at least 50 characters',
                    },
                  })}
                  className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                    errors.coverLetter ? 'border-red-500' : ''
                  }`}
                  placeholder="Tell us why you're a great fit for this position..."
                  defaultValue={''}
                />
                {errors.coverLetter && (
                  <p className="mt-1 text-sm text-red-600">{errors.coverLetter.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Resume *</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="resume"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx"
                        {...register('resume', { required: 'Resume is required' })}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                  {errors.resume && (
                    <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                {...register('terms', {
                  required: 'You must accept the terms and conditions',
                })}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="/privacy" className="text-blue-600 hover:text-blue-500">Privacy Policy</a> and{' '}
                <a href="/terms" className="text-blue-600 hover:text-blue-500">Terms of Service</a> *
              </label>
            </div>
            {errors.terms && (
              <p className="text-sm text-red-600">{errors.terms.message}</p>
            )}

            <div className="pt-4 space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                  isSubmitting 
                    ? 'bg-blue-400' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Submit Application
                  </>
                )}
              </button>
              
              {submitError && (
                <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
                  {submitError}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
