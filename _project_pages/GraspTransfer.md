---
title: Grasp Transfer based on Self-Aligning Implicit Representations of Local Surfaces
layout: project_page
permalink: /GraspTransfer/
header_img: /assets/images/RAL2023.png
pdf: https://arxiv.org/abs/2308.07807
video: https://www.youtube.com/embed/gp1D0OP82SI
---

<div id="primarycontent">
<center>
<h2>{{page.title}}</h2>   
<br> 
	<a href="/">Ahmet E Tekden<sup>1</sup></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://www.deisenroth.cc/">Marc P. Deisenroth<sup>2</sup></a> &nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://yaseminb.github.io/">Yasemin Bekiroglu<sup>1,2</sup></a><br><br>
	<sup>1</sup>Chalmers University of Technology
	<sup>2</sup>University College London
</center>
<br>

<img width="1000px" style="margin: 0px -100px" id="header_img" src="{{page.header_img}}"/><br>
<br>
<h2>Abstract</h2>
<p>
Objects we interact with and manipulate often share similar parts, such as handles, that allow us to transfer our actions flexibly due to their shared functionality. This work addresses the problem of transferring a grasp experience or a demonstration to a novel object that shares shape similarities with objects the robot has previously encountered. Existing approaches for solving this problem are typically restricted to a specific object category or a parametric shape. Our approach, however, can transfer grasps associated with implicit models of local surfaces shared across object categories. Specifically, we employ a single expert grasp demonstration to learn an implicit local surface representation model from a small dataset of object meshes. At inference time, this model is used to transfer grasps to novel objects by identifying the most geometrically similar surfaces to the one on which the expert grasp is demonstrated. Our model is trained entirely in simulation and is evaluated on simulated and real-world objects that are not seen during training. Evaluations indicate that grasp transfer to unseen object categories using this approach can be successfully performed both in simulation and real-world experiments. The simulation results also show that the proposed approach leads to better spatial precision and grasp accuracy compared to a baseline approach. 
</p>
<hr>

<h2>Paper</h2>
<p>Ahmet E Tekden, Marc P. Deisenroth, Yasemin Bekiroglu<br/>
<a href="{{page.pdf}}"><em>Grasp Transfer based on Self-Aligning Implicit Representations of Local Surfaces</em></a></p>

<hr>

<h2>Supplementary Video</h2>

<div class="video">
    <iframe width="560" height="315" src="{{page.video}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br/><hr>

<h2>Code</h2>

<p>Code and dataset is available at:<br/>
<a href="https://github.com/Fzaero/Grasp-Transfer"><em>https://github.com/Fzaero/Grasp-Transfer</em></a></p>
