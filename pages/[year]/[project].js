import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import content from '../../content.js'

const Project = () => {

    const router = useRouter();
    const { year, project: id } = router.query;

    const [project, setProject] = useState({})

    useEffect(() => {
        if (year && id) {
            const p = content[year].find((project) => project.id === id)
            if (p) {
                setProject(p)
                console.log(p)
            }
        }
    }, [year, id])

    // const project = content[year].find((project) => project.id === id)
    // console.log(project)

  return (
    <div style={{
        margin: 0,
        color: 'white',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    }}>
  <div style={{
    margin: 'auto',
    width: '50%',
    fontFamily: 'consolas',
  }}>
        <h1>{project.title}</h1>

    {project.videos?.length > 0 && (
        <>
        <h2>Videos</h2>
        {project.videos.map((video, index) => (
        <div key={index}>
            <video width="320" height="240" controls>
                <source src={`/content/${project.id}/${project.year}/${video}`} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
    </div>
    ))}</>
        )}

    {project.downloads?.length > 0 && (
        <>
            <h2>Downloads</h2>
            {project.downloads.map((file, index) => (
                <div key={index}>
                    <a href={`/content/${project.id}/${project.year}/${file}`} download>{file}</a>
                </div>
            ))}</>
        )}
        </div></div>
  )
}

export default Project;