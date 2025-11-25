import React from 'react'

export default async function CourseDetails({ params }) {
    const { id } = await params;
    return (
    <div>CourseDetails {id}</div>
  )
}
