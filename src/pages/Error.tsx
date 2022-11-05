import React from 'react'

function Error() {

  // Get HTTPS response code and render dynamic error page showing error code & message
  // Render error code into error URL slug
  // Use Navigate to direct to correct URL

  let response = new Response();

  return (
    <div>Error {response.status}: {!response.statusText ? 'All Good' : 'Unknown Error'}</div>
  )
}

export default Error