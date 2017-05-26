import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { store } from './../../client.js'
import { CLEAR_ALL_NOTIFCATION } from './../../utils/actionTypes.js'

class NotifyBar extends Component {
  render () {
    if (!this.props.message.type) return null
    return (
      <div className={ (this.props.message.type === 'error') ? css(styles.error, styles.container) : css(styles.success, styles.container) } onClick={() => store.dispatch({type: CLEAR_ALL_NOTIFCATION})}>
        <div className={css(styles.inner)}>
          <div className={css(styles.content)}>
          {this.props.message.text}
          <button>OK</button>
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: '1em',
    position: 'fixed',
    boxSizing: 'border-box',
    zIndex: 99,
    top: '5px',
    left: '0',
    width: '100%',
    height: 'calc(100vh - 5px)',
    borderRadius: '.5em',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  error: {
    backgroundColor: 'rgba(237, 28, 36, 0.9)'
  },
  success: {
    backgroundColor: '#97f218'
  }
})

export default NotifyBar
