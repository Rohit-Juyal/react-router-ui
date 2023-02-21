import React from 'react';
import './about.css'

const About = () => {

  const about = [
    {
      heading: "1",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "2",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "3",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "4",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "5",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "6",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "7",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "8",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "9",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "10",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "11",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "12",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "13",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "14",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },
    {
      heading: "15",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis soluta ad culpa numquam ab eum totam, iusto dignissimos hic corrupti blanditiis repellat officia quis veniam consequuntur quo reiciendis quae! Recusandae corrupti veniam iste voluptate exercitationem harum aperiam distinctio, earum illum nostrum error mollitia quibusdam, saepe explicabo praesentium, sequi culpa?"
    },

  ]

  return (
    <div className='about'>
      <h1 className='section-padding'>About</h1>
      <div className="about-content section-padding">
        {
          about.map((data) => (
            <div className="about-content-container" key={data.heading}>
              <div className="about-heading">
                <h2>Heading {data.heading}</h2>
              </div>
              <div className="about-title">
                <p>{data.title}</p>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default About
