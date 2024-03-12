import { FC } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonContainer: FC = () => {
  return (
    <div className=" grid grid-cols-5 gap-4 ">
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
        <Skeleton className=" w-[15rem] h-[10rem] border border-gray-200 rounded p-4 mb-4" />
    </div>
  )
}

export default SkeletonContainer