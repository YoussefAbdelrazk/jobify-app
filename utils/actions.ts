'use server';

import prisma from './db';
import { auth } from '@clerk/nextjs';
import { JobType, CreateAndEditJobType, createAndEditJobSchema } from './types';
import { redirect } from 'next/navigation';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';

function authUserId(): string {
  const { userId } = auth();
  if (!userId) {
    redirect('/');
  }
  return userId;
}
export async function CreateJobAction(
  values: CreateAndEditJobType
): Promise<JobType | null> {
  const userId = authUserId();

  try {
    createAndEditJobSchema.parse(values);
    const job = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.log(error, 'error');
    return null;
  }
}
