

import './ContactItem.css';

function ContactItem(props){
    return(
        <div>

        <div className="card">
          <div className="top">
            <h2>{props.name}</h2>
            <img
            className='circle-img'
              src= {props.img}
              alt="avatar_img"
            />
          </div>
          <div className="bottom">
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
        </div>
      </div>

    );
}
export default ContactItem;