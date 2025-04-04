'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  JobStatus,
  JobMode,
  createAndEditJobSchema,
  CreateAndEditJobType,
} from '@/utils/types';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { CustomFormField, CustomFormSelect } from './FormComponents';

export default function CreateJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: '',
      company: '',
      location: '',
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });
  const onSubmit = (values: CreateAndEditJobType) => {
    console.log(values, 'data');
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='p-8 bg-muted rounded '
      >
        <h2 className=' capitalize font-semibold text-4xl mb-6'>Add Job </h2>
        <div className=' grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start  '>
          {/* postion */}
          <CustomFormField name='position' control={form.control} />
          {/* company */}
          <CustomFormField name='company' control={form.control} />
          {/* location */}
          <CustomFormField name='location' control={form.control} />
          {/* status */}
          <CustomFormSelect
            name='status'
            control={form.control}
            items={Object.values(JobStatus)}
            labelText='status'
          />
          {/* mode */}
          <CustomFormSelect
            name='mode'
            control={form.control}
            items={Object.values(JobMode)}
            labelText='mode'
          />
        </div>
      </form>
    </Form>
  );
}
