---
title: BRDPN
layout: project_page
permalink: /BRDPN/
header_img: /assets/images/BRDPN.png
pdf: /assets/papers/BRDPN.pdf
video: https://www.youtube.com/embed/uWPr7IFT_9k
video2: https://www.youtube.com/embed/rvbmZlVEwHk

---

<div id="primarycontent">
<center>
<h2>Belief Regulated Dual Propagation Nets for Learning Action  Effects on Articulated Multi-Part Object</h2>   
<br> 
	<a href="/">A. E. Tekden<sup>1</sup></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://web.cs.hacettepe.edu.tr/~aykut/">A. Erdem<sup>2</sup></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://web.cs.hacettepe.edu.tr/~erkut/">E. Erdem<sup>2</sup></a><br>
	<a href="https://mertimre.github.io/">M. Imre<sup>1</sup></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://scholar.google.com/citations?user=H8NkqvQAAAAJ&hl=tr">M. Y. Seker<sup>1</sup></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://www.cmpe.boun.edu.tr/~emre/">E. Ugur<sup>1</sup></a><br><br>
	<a href="http://colors.cmpe.boun.edu.tr/"><b><sup>1</sup>Boun CoLoRs</b></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://vision.cs.hacettepe.edu.tr/"><b><sup>2</sup>HUCVL</b></a> <br>
</center>
<br>

<img height="200px" style="margin: 0px -120px" id="header_img" src="{{page.header_img}}"/><br>
<br>
<h2>Abstract</h2>
<p>
In recent years, graph neural networks have been
successfully applied for learning the dynamics of complex and
partially observable physical systems. However, their use in the
robotics domain is, to date, still limited. In this paper, we intro
duce <em>Belief Regulated Dual Propagation Networks (BRDPN)</em>, a
general purpose learnable physics engine, which enables a robot
to predict the effects of its actions in scenes containing groups
of articulated multi-part objects. Specifically, our framework
extends the recently proposed propagation networks (PropNets)
and consists of two complementary components, a <em>physics
predictor</em> and a <em>belief regulator</em>. While the former predicts the
future states of the object(s) manipulated by the robot, the latter
constantly corrects the robots knowledge regarding the objects
and their relations. Our results showed that after trained in a
simulator, the robot could reliably predict the consequences
of its actions in object trajectory level and exploit its own
interaction experience to correct its belief about the state of
the world, enabling better predictions in partially observable
environments. Furthermore, the trained model was transferred
to the real world and its capabilities were verified in correctly
predicting trajectories of pushed interacting objects whose joint
relations were initially unknown. We compared our BRDPN
against the original PropNets and showed that BRDPN can
perform consistently well even if the relations between the
objects are not explicitly given but instead predicted from observations.
</p>

<h2>Paper</h2>
<p>A. E. Tekden, A. Erdem, E. Erdem, M. Imre, M. Y. Seker and E. Ugur <br/>
<a href="{{page.pdf}}"><em>Belief Regulated Dual Propagation Nets for Learning Action  Effects on Articulated Multi-Part Object</em></a></p>


<br/>

<h2>Supplementary Video</h2>

<div class="video">
    <iframe width="560" height="315" src="{{page.video}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br/>

<h2>Code and Dataset</h2>

<p>Code and dataset is available at <a href="https://github.com/Fzaero/BRDPN"><em>https://github.com/Fzaero/BRDPN</em></a></p>

<br/>

<h2>Further Experiments</h2>

<p> In here, we model trajectory of PCB given up to 4 obstacles next to its sides. Physic predictor can predict trajectory(position and quaternion) of lever-upped PCB, given 500 training trajectory.</p> 

<div class="video">
    <iframe width="560" height="315" src="{{page.video2}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>
