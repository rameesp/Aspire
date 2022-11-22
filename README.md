# Aspire

<b>About the app</b>

<p>Aspire is a react native app with minimal functionality that will run on both iOS and Android to showcase my coding skills in react native.</p>
<p>
  <b>Folder structure</b></br>
  <b> Project is divided into folders: </b>
  <ul>
  <li><b> assets:</b> It includes icons and other resources.</li>
  <li><b> components:</b> It is separated into these folders.
    <ul>
      <li><b>widgets : </b> It consists of fundamental, reusable components</li>
      <li><b>templates :</b> A template is made up of two or more widgets.</li>
      <li><b>pages :</b> A page is essentially a screen, and a page is made up of multiple templates. </li>
    </ul>
  <li><b>navigation : </b> This folder contains navigators.</li>
  <li><b>resources : </b> This folder contains all of the constants such as string const...</li>
  <li><b>store : </b> This folder contains everything related to Redux.</li>
  <li><b>theme : </b> The theme folder contains color, font configuration, and so on.</li>
</ul>
</p>
<b>How the logic is separated from the view</b>
<p>
A page or component is split into three sections.
  <ul>
      <li><b>View : </b> A view is made up entirely of UI components with no logic.</li>
      <li><b>Controller : </b>A view controller is simply logical and does not have any UI. </li>
      <li><b> View Controller : </b>This is the place at which the view and controller are joined to form a single component.</li>
    </ul>
</p>
<b>Managing a network call</b>
<p>I made redux custom middleware with axios to handle network calls, and this middleware will handle cases such :
<ul>
      <li>1) Prior to calling the API</li>
      <li>2) After API success  </li>
      <li>3) After an API failure</li>
    </ul>
</p>
<b>Main libraries that we use</b>
<p>
<ul>
      <li><b>@react-navigation : </b>In this project, this library is used to create bottom tabs and navigate between screens.</li>
      <li><b>redux : </b> Redux is mostly utilized in this project to handle API calls by creating custom middleware, as well as for state updates.</li>
      <li><b>react-native-modal : </b> The bottom sheet is created using this library.</li>
      <li><b>react-native-reanimated : </b> In this project, Reanimated is used to generate basic components such as a switch and a progress bar.</li>
      <li><b>react-native-svg : </b> This library is used to display svg icons.</li>
    </ul>
</p>