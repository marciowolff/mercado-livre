import React from 'react'
import { Icon, Load } from '../'

const Loading = ({ show, className, hideMessage }) => (
  <Load
    className={className}
    type="icon"
    show={show}
    hideMessage={hideMessage}
    icon={<Icon name="loading" width="80" height="80" />}
  />
)

export default Loading