import { useEffect } from 'react';
import { PropTypes } from 'prop-types';

const Callback = ({ auth }) => {
  useEffect(() => {
    // handle authentication if expected values are in the URL.
    if (/access_token|id_token|error/.test(window.location.hash)) {
      auth.handleAuthentication();
    } else {
      throw new Error('Invalid callback URL.');
    }
  }, []);
  return (
    <div>Loading...</div>
  );
};

Callback.propTypes = {
  auth: PropTypes.shape({
    handleAuthentication: PropTypes.func.isRequired,
  }).isRequired,
};

export default Callback;
