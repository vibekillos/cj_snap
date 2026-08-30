import React from 'react'
import { formatFileSize } from '../utils/formatToMBS'

const SelectedImageView = ({selectedImage}) => {
  return (
    <div>
          {/* list view */}
          <div className='flex flex-col gap-y-2'>
              {selectedImage.length > 0 ?
                  selectedImage.map((item, idx) => {
                      return (
                          <div key={idx} className='flex flex-cols items-center justify-between bg-white border border-border dark:border-surface-white/50 rounded-lg p-0'>
                              <div className='flex items-center space-x-3'>
                                  <img src={URL.createObjectURL(item)} alt={item.name} className='w-20 h-14 object-center rounded-l-lg' />
                                  <div>
                                      <h1 className='font-space text-deep-black dark:text-surface-whites'>
                                      {item.name.length > 25
                                          ? item.name.slice(0, 15) + "..."
                                              : item.name}
                                      </h1>
                                  </div>
                              </div>
                              <div className='px-3 text-deep-black dark:text-surface-whites'>
                                  <h1 className='font-space'>{formatFileSize(item.size) }</h1>
                              </div>
                          </div>
                      )
                  })
                  : "no images are inputed"}
          </div>
    </div>
  )
}

export default SelectedImageView
