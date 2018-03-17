import PropTypes from "prop-types"

const show = ({ when, children }) => (when ? children : null)

show.propTypes = {
  when: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}

export default show
