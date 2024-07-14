import React from 'react';
import './comp2.css'

function Comp2() {
  return (
    <div className='comp2-main'>
      <div className="container">
        <h2>Latest Projects</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Author</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='image-text'>
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Project Apollo" /> Project Apollo <br />
              </td>
              <td>
                Gantos <br />
              </td>
              <td>
                Carl Jenkins <br />
              </td>
              <td>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
                65%
              </td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td className='image-text'>
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Project Bongo" /> Project Bongo <br />
              </td>
              <td>
                Adray Transportation <br />
              </td>
              <td>
                Bertha Martin <br />
              </td>
              <td>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '33%' }}></div>
                </div>
                33%
              </td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td className='image-text'>
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Project Canary" /> Project Canary <br />
              </td>
              <td>
                Evans <br />
              </td>
              <td>
                Stacie Hall <br />
              </td>
              <td>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '50%' }}></div>
                </div>
                50%
              </td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td className='image-text'>
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Project Edison" /> Project Edison <br />
              </td>
              <td>
                Monsource Investment Group <br />
              </td>
              <td>
                Carl Jenkins <br />
              </td>
              <td>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
                80%
              </td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td className='image-text'>
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Project Indigo" /> Project Indigo <br />
              </td>
              <td>
                Edwards <br />
              </td>
              <td>
                Ashley Briggs <br />
              </td>
              <td>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '78%' }}></div>
                </div>
                78%
              </td>
              <td><button>View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comp2;
