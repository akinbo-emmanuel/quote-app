import { FC } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonContainer: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-auto h-[10rem] border border-gray-200 rounded p-4 mb-4" />
    </div>
  )
}

export default SkeletonContainer