import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getUser } from "../../../../redux/users/user-reducer";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

export const ProfilePage = (props) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { user, getUser } = props;

  useEffect(() => {
    getUser(id);
  }, []);

  const handleApiLoaded = (map, maps) => {
    console.log(map, maps);
  };

  const AnyReactComponent = ({ text }) => (
    <FaMapMarkerAlt size={24} title={text} />
  );

  return (
    <div className='post-page-wrapper'>
      <div className='post-list-wrapper profile-page'>
        <div className='row top'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-12'>
                <h5>{user.name}</h5>
                <h6>{user.address.city}</h6>
              </div>
              <div className='col-md-12 profile-page-infos'>
                <div className='row '>
                  <div className='col-md-4 left'>Username</div>
                  <div className='col-md-6 right'>{user?.name}</div>
                  <div className='col-md-4 left'>Email</div>
                  <div className='col-md-6 right'>{user?.email}</div>
                  <div className='col-md-4 left'>Phone</div>
                  <div className='col-md-6 right'>{user?.phone}</div>
                  <div className='col-md-4 left'>Website</div>
                  <div className='col-md-6 right website'>{user?.website}</div>
                  <div className='col-md-4 left'>Company</div>
                  <div className='col-md-6 right'>{user?.company?.name}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div style={{ height: "100%", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDtx_crm6YGG_8zwI6lotNQXA5w1CH-L0o",
                }}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                  handleApiLoaded(map, maps)
                }
                defaultCenter={{
                  lat: user.address.geo.lat || 39,
                  lng: user.address.geo.lng || 39,
                }}
                defaultZoom={5}
              >
                <AnyReactComponent
                  lat={user.address.geo.lat || 39}
                  lng={user.address.geo.lng || 39}
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
        <div className='row bottom'>
          <div className='col-md-12'>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ea
              nostrum numquam officiis quas commodi dolores nobis eaque veniam
              quos impedit sit, eligendi architecto cum vitae minima suscipit
              cupiditate iure ratione asperiores rerum atque aperiam deserunt
              est.
            </p>
            <a href='#'>Daha fazla</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
