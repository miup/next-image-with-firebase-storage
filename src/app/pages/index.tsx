import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const Index: NextPage<{}> = () => {
  return (
    <div>
      <h1>index page</h1>
      <div>
        <Image
          width="752px"
          height="336px"
          src="https://firebasestorage.googleapis.com/v0/b/sample-db98e.appspot.com/o/logo-built_white.png?alt=media&token=e08a3907-7ee2-445e-bf6d-19eab7ddbff5"
        />
      </div>
    </div>
  )
}

export default Index
