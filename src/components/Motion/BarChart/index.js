import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { TranslateY } from 'react-native-motion'

import Styles from './styles'

const propTypes = {
  valueY: PropTypes.number,
  height: PropTypes.number,
};
const defaultProps = {
  valueY: 0,
  height: 100
};

export class BarChart extends Component {
  render() {
    const { height, valueY, contentContainerStyle, style, labelTop, children, labelBottom, ...rest } = this.props

    const value = height - valueY

    return (
      <View style={[Styles.barContainer, contentContainerStyle]}>
        <TranslateY animateOnDidMount initialValue={height} value={value} {...rest}>
          {labelTop}
          <View style={[style, {height}]}>
            <View style={{height: valueY}}>
            {children}
            </View>
          </View>
        </TranslateY>
        {labelBottom}
      </View>
    )
  }
}

BarChart.propTypes = propTypes;
BarChart.defaultProps = defaultProps;

export default BarChart
