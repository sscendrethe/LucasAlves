export const alignmentArgTypes = {
  align: {
    control: { type: 'select' },
    options: ['right', 'center', 'left'],
  },
}
export const weightArgTypes = {
  weight: {
    control: { type: 'inline-radio' },
    options: ['300', '400', '500', '600', '700', '800', '900'],
  },
}
export const colorArgTypes = {
  color: {
    control: { type: 'select' },
    options: [
      'white',
      'black',
      'softgray',
      'gray',
      'darkgray',
      'orange',
      'vividorange',
      'softorange',
      'verysoftorange',
      'darkblue',
      'blue',
      'softblue',
    ],
  },
}

export const backgroundColorArgTypes = {
  backgroundColor: {
    control: { type: 'select' },
    options: [
      'white',
      'black',
      'softgray',
      'gray',
      'darkgray',
      'orange',
      'vividorange',
      'softorange',
      'verysoftorange',
      'darkblue',
      'blue',
      'softblue',
    ],
  },
}
export const disableTable = {
  table: {
    disable: true,
  },
}
export const headingsArgTypes = {
  level: {
    control: { type: 'select' },
    options: ['1', '2', '3', '4', '5', '6'],
  },
}
