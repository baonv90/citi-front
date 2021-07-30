# upciti-front

The idea of this dashboard to provide general information and some insights about the devices

2 main blocks of information

- Insights :
  - About the pourcentage of connected/disconnected devices
  - About the pourcentage of each connection type of disconnected device

- List of Devices based on its status 
  - The DeviceList is displayed under the form of navigation tab, which categorized by device's status (connected, disconnected)
  - Each Item of the list contains a simple and a detailed view

# Implementation & Dependencies
The React project is implemented in Typescirpt using styled-components for styling and Jest, React-Testing-Library for testing.

The project follows Atomic design patterns with some adjusted structure

- App.jsx hold the structure of the app, it received data and attribute to the sub-components
- Components : second level of information blocks ( DeviceList, Insights)
- Molecules : presentations of ListItem, InsightItem and its skeleton
- Atoms: small reusable components such as a representation of status with colored icon, or skeleton loader
- Layouts: contains the tabs strucutre

Dependencies: styled-components

# Possible improvements
- Filtering devices based on its serial_number, connection_type etc.
- Exploring the pattern of the device information and its status
