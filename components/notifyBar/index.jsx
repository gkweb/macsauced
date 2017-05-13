import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import {store} from './../../client.js'

class NotifyBar extends Component {
  render () {
    if (!this.props.message.type) return null
    return (
      <div className={css(styles.container)}>
        <div className={ (this.props.message.type === 'error') ? css(styles.error, styles.container) : css(styles.success, styles.container) }>{this.props.message.text}</div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: '1em',
    marginTop: '-1em',
    marginLeft: '-1em',
    marginRight: '-1em',
  },
  error: {
    backgroundColor: '#ed1c24'
  },
  success: {
    backgroundColor: '#97f218'
  }
})

// TEST

//   errorMsg: {
//     backgroundColor: 'red'
//   }
// })

export default NotifyBar
