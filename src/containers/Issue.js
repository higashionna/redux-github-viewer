import { connect } from 'react-redux'
import IssueTemp from '../components/templates/IssueTemp'


const mapStateToProps = ({ issue }) => {
  return {
    data: issue.data,
  }
}

export default connect(mapStateToProps)(IssueTemp)
