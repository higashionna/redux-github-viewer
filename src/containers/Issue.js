import { connect } from 'react-redux'
import IssueTemp from '../components/templates/IssueTemp'


const mapStateToProps = ({ issue }) => {
  return {
    data: issue.datas,
  }
}

export default connect(mapStateToProps)(IssueTemp)
