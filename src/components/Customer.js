import React from "react";

class Customer extends React.Component {
  render() {
    console.log(this.props);
    const { id, name, image, gender, job, birthday, lover } = this.props;
    return (
      <div>
        <CustomerProfile id={id} image={image} name={name}></CustomerProfile>
        <CustomerInfo
          birthday={birthday}
          gender={gender}
          job={job}
          lover={lover}
        />
      </div>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    const { name, image, id } = this.props;
    return (
      <div>
        <img src={image} alt="profile" />
        <h2>
          {name}
          {id}
        </h2>
      </div>
    );
  }
}

class CustomerInfo extends React.Component {
  render() {
    const { gender, job, birthday, lover } = this.props;
    return (
      <div>
        <p>{birthday}</p>
        <p>{gender}</p>
        <p>{job}</p>
        <p>{lover}</p>
      </div>
    );
  }
}
export default Customer;
// export default CustomerProfile;
