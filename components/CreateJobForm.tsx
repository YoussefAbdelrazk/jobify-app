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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateJobAction } from '@/utils/actions';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

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

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => CreateJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: 'Something went wrong, please try again.' });
        return;
      }
      toast({ description: 'Job created successfully.' });
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      queryClient.invalidateQueries({ queryKey: ['charts'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
      router.push('/jobs');
    },
  });

  const onSubmit = (values: CreateAndEditJobType) => {
    mutate(values);
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
          <Button
            type='submit'
            className=' self-end capitalize '
            disabled={isPending}
          >
            {isPending ? 'Creating...' : 'Create Job'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
