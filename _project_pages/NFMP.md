---
title: Neural Field Movement Primitives for <br> Joint Modelling of Scenes and Motions
layout: project_page
permalink: /NFMP/
header_img: /assets/images/NFMP.png
pdf: #
video: https://www.youtube.com/embed/ekaIVBpe2Gw
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

<img width="800" style="margin: 0px " id="header_img" src="{{page.header_img}}"/><br>
<br>
<h2>Abstract</h2>
<p>
This paper presents a novel Learning from Demonstration (LfD) method that uses neural fields to learn 
new skills efficiently and accurately. It achieves this by utilizing a shared embedding to learn both 
scene and motion representations in a generative way. Our method smoothly maps each expert demonstration 
to a scene-motion embedding and learns to model them without requiring hand-crafted task parameters or 
large datasets. It achieves data efficiency by enforcing scene and motion generation to be smooth with 
respect to changes in the embedding space. At inference time, our method can retrieve scene-motion 
embeddings using test time optimization, and generate precise motion trajectories for novel scenes. 
The proposed method is versatile and can employ images, 3D shapes, and any other scene representations 
that can be modeled using neural fields. Additionally, it can generate both end-effector positions and 
joint angle-based trajectories. Our method is evaluated on tasks that require accurate motion trajectory 
generation, where the underlying task parametrization is based on object positions and geometric scene changes. 
Experimental results demonstrate that the proposed method outperforms the baseline approaches and generalizes 
to novel scenes. Furthermore, in real-world experiments, we show that our method can successfully model 
multi-valued trajectories, it is robust to the distractor objects introduced at inference time, and it 
can generate 6D motions.
</p>

<h2>Paper</h2>
<p>Ahmet E Tekden, Marc P. Deisenroth, Yasemin Bekiroglu<br/>
<a href="{{page.pdf}}"><em>Neural Field Movement Primitives for Joint Modelling of Scenes and Motions</em></a></p>

<br/>

<h2>Supplementary Video</h2>

<div class="video">
    <iframe width="560" height="315" src="{{page.video}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br/>

<h2>Code</h2>

<p>Code is coming soon.</p>

<br/>
