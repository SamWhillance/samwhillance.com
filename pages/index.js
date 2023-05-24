import Link from 'next/link'
import content from '../content.js'

const Index = () => {

  /* let years = []

  content.forEach((item) => {
    if (!years.includes(item.year)) {
      years.push(item.year)
    }
  })

  years = years.sort((a, b) => b - a).map((year) => {
    return {
      year: year,
      link: `/year/${year}`
    }
  }) */

  const years = Object.keys(content)

  return (<div style={{
    margin: 0,
    color: 'white',
    background: 'linear-gradient(90deg, rgba(20,50,36,1) 0%, rgba(201,120,151,1) 35%, rgba(101,212,255,1) 100%)',
}}>
  <div style={{
    margin: 'auto',
    width: '50%',
    fontFamily: 'consolas',
  }}>
    <h1>samwhillance.com</h1>
    <div>Welcome to my awful website</div>
    <br/>
    <Link href="/about">
      <a>About</a>
    </Link>
    <h2>Contents</h2>

    {years.map(year => (
      <div key={year}>
        <h3>{year}</h3>
        <div>
          {content[year].map(project => (

          <div key={`${year}-${project.id}`}>
            <Link href={`${year}/${project.id}`}>
              <a>{project.title}</a>
            </Link>
          </div>))}
        </div>
        <br/>
      </div>))}
  </div>
  </div>
  )
}

export default Index;
