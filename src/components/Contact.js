import ContactItem from "./ContactItem";

const contacts = [
    {
      name: "Beyonce",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "b@beyonce.com"
    },
    {
      name: "Jack Bauer",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "+987 654 321",
      email: "jack@nowhere.com"
    },
    {
      name: "Chuck Norris",
      imgURL:
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
      phone: "+918 372 574",
      email: "gmail@chucknorris.com"
    }
  ];

  function Contact(){
    return(
        <div>
        <ContactItem
            name = {contacts[0].name}
            img = {contacts[0].imgURL}
            phone = {contacts[0].phone}
            email = {contacts[0].email}
        />
        <ContactItem
            name = {contacts[1].name}
            img = {contacts[1].imgURL}
            phone = {contacts[1].phone}
            email = {contacts[1].email}
        />
        <ContactItem
            name = {contacts[2].name}
            img = {contacts[2].imgURL}
            phone = {contacts[2].phone}
            email = {contacts[2].email}
        />
        </div>
        



    );
  }

  export default Contact;