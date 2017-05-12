import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  settingsBtn: {
    background: 'none',
    border: 0,
    outline: 0,
    fontSize: '1em',
    cursor: 'pointer',
    color: '#999',
    transition: 'color .2s ease-in-out',
    ':focus': {
      outline: 0,
      color: '#8c194f'
    },
    ':hover': {
      color: '#8c194f'
    }
  },
  topBar: {
    display: 'flex',
    padding: '1em 0',
    marginBottom: '1em',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #999'
  },
  topBarCell: {
    display: 'flex',
    color: '#999'
  },
  deviceName: {
    display: 'block',
    marginLeft: '.5em'
  }
})

class TopNavBar extends Component {
  render () {
    return (
      <div className={css(styles.topBar)}>
        <div className={css(styles.topBarCell)}>Device: <span className={css(styles.deviceName)}>en0</span></div>
        <div className={css(styles.topBarCell)}><button className={css(styles.settingsBtn)}>Settings</button></div>
      </div>
    )
  }
}

export default TopNavBar