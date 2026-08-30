import React, { useState } from 'react'
import { Folder } from 'lucide-react'
import ImageDropzone from './ImageDropZone'

const CardComponent = ({getFile}) => {
    const handleFileSelect = (file) => {
    getFile(file) 
    console.log("Selected file:", file);
  };
  return (
    <div className='bg-deep-black dark:bg-surface-white dark:border-surface-white/10 w-full rounded-2xl'>
      <div className='flex items-center space-x-5 p-5'>
        <div><Folder className='text-electric-blue w-20 h-20' /></div>
        <div>
          <h1 className='dark:text-deep-black text-surface-white text-xl font-inter font-semibold'>Upload Files</h1>
          <p className='dark:text-deep-black text-surface-white/80 font-inter'>Select and upload files from your device or you can drap and drop</p>
        </div>
      </div>
      <div className='p-1.5'>
      <ImageDropzone onFileSelect={handleFileSelect} />
      </div>
    </div>
  )
}

export default CardComponent
