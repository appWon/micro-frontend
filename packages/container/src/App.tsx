import React from 'react'

const ServiceApp = React.lazy(()=> import('remote_service1/App'))


function App() {
  return (
    <div>
      <div>
        container
      </div>
      {
        <React.Suspense fallback={<div>로딩중</div>}>
          <ServiceApp />
        </React.Suspense>
      }
    </div>
  )
}

export default App
