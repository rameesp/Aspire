# Aspire the task app

<b>About the app</b>

<p>Aspire is a react native app with minimal functionality that will run on both iOS and Android to showcase my coding skills in react native.</p>
<p>
  <b>Folder structure</b></br>
  <b> Project consist of folders :</b>
  <ul>
  <li><b> assets:</b> It consists of icons and other assets</li>
  <li><b> components:</b> It consist of folders called 
    <ul>
      <li><b>widgets : </b> It consists of basic re usable components</li>
      <li><b>templates :</b> A template is the combination of two or more widgets </li>
      <li><b>pages :</b> Page is basically a screen , a page is the combination of multiple widget </li>
    </ul>
  <li><b>navigation : </b> This folder contains navigators</li>
  <li><b>resources : </b> This folder consists of all the constants like string const ...</li>
  <li><b>store : </b> All things related to store is placed under this folder</li>
  <li><b>theme : </b> Theme folder consist of color , font configuration ... </li>
</ul>
</p>
<b>How the logic is separated from view</b>
<p>
A page or component is divided into three part
  <ul>
      <li><b>View : </b> A view consist of purly UI part without anny logic</li>
      <li><b>Controller :</b> A view controller consist of only logical part without any UI </li>
      <li><b> View Controller :</b>This is where view and controller binded to form a single component</li>
    </ul>
</p>
<b>Handling network call</b>
<p>For handling network call i have created with </p>
