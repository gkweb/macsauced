import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Settings from './../settings/'
import TopNavBar from './../topNavBar/'
import Home from './../home/'

const styles = StyleSheet.create({
  seedContainer: {},
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
  },
  mainTitle: {
    textAlign: 'center',
    margin: '0 0 .5em 0',
    fontSize: '2em',
    lineHeight: '110%'
  },
  mainButton: {
    display: 'block',
    width: '100%',
    margin: '0 auto',
    padding: '1em',
    boxSizing: 'border-box',
    border: '0',
    textAlign: 'center',
    borderRadius: '.1em',
    cursor: 'pointer',
    backgroundColor: '#ff66d2',
    fontWeight: 'bold',
    transition: 'background-color .2s ease-in-out',
    ':focus': {
      outline: '0',
      border: '0',
      backgroundColor: '#8c194f'
    },
    ':hover': {
      backgroundColor: '#8c194f'
    },

  }
})

const currentPage = 'settingsPage'

class App extends Component {
  render () {
    return (
      <div className={css(styles.seedContainer)}>
        <TopNavBar />
        <Settings devices={this.props.devices}/>
      </div>
    )
  }
}

export default App
