import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ModalExampleSize extends Component {
  state = { open: false }

  close = () => {
     this.props.close();
  }   

  render() {
    const { open, size } = this.state

    return (
    

        <Modal size={'large'} open={this.props.show} onClose={this.close} closeIcon='close'>
          <Modal.Header>
           {this.props.title}
          </Modal.Header>
          <Modal.Content>
            {this.props.children}
          </Modal.Content>
          <Modal.Actions>
            <Button negative>
              No
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>
 
    )
    }
}

export default ModalExampleSize
