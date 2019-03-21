
import React from 'react';
import { connect } from 'react-redux';

function GithubData({ data }) {
  if(!data) {
    return (
      <div>
        No Data
      </div>
    )
  }
  return (
    <div>
      <h3> To know about react redux thunk 
           <a href="https://appdividend.com/2018/10/03/redux-thunk-tutorial-example/" target="_blank"> Click Here</a> 
      </h3>
      <div>
        Name: { data.name }
      </div>
      <br />
      <div>
        Blog: { data.blog }
      </div>
      <br />
      <div>
        Github Followers: { data.followers }
      </div>
      <div>
        Location: { data.location }
      </div>
      <br />
      <div>
        Bio: { data.bio }
      </div>
      <br />
      <div>
        Blog: { data.blog }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const  Userdata = connect(
  mapStateToProps,
  null
)(GithubData);

export default Userdata;