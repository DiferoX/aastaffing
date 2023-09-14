import React from 'react'
import { ourTeam } from '../components/TeamList';
import ImageContent from '../components/ImageContent';


const People = () => {
  return (
    <div>

      <div className='container'>

        <div className='ourTeamHomeContent1 my-5'>
          <p className="text-decoration-underline text-center text-danger text-uppercase fw-bold">OUR TEAM</p>
          <h1 className='text-center'>Professional Team</h1>
        </div>

        <div className='row row-cols-1 row-cols-md-3 g-5 my-5'>
          {
            ourTeam.map(coworker => 
              <div className="col">
                <div className='card'>
                  <div className="peopleContent card-body col-md-5">
                    <img src={ coworker.image } className="people-images" alt={ coworker.name } />
                    {/* <div id='peopleImg-01' className='people-images'></div> */}
                  </div>
                </div>
                <div className="peopleContentInfo text-center mt-5">
                  <p className="text-uppercase text-danger">{ coworker.title }</p>
                  <h3 className="text-capitalize fw-bold">{ coworker.name }</h3>
                  <p className='mt-4'>{ coworker.info }</p>
                  <div className='mt-5'>
                    {
                      coworker.networks.map(network =>
                        network.name
                      )
                    }
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className='my-5'>
        <ImageContent />
      </div>

      <div className='container'>
        <div className="row text-center px-4 py-5">
          <div className="OurClientsContent2">
            <h6 className="text-decoration-underline text-danger fw-bold">WORK WITH US</h6>
            <h3 className="fw-bold py-5">We are always looking for new partners</h3>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum voluptatem quis tempore assumenda sit, asperiores eum repellendus illo pariatur neque omnis accusantium rerum aspernatur fuga ipsa dolorum officia consequuntur.</p>
            <button type="button" className="btn btn-danger btn-lg mt-5 fw-bold">Make an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default People
