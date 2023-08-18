---
title: Neural Field Movement Primitives for <br> Joint Modelling of Scenes and Motions
layout: project_page_nfmp
permalink: /NFMP/
header_img: /assets/images/NFMP.png
pdf: https://arxiv.org/abs/2308.05040
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

<img width="1000" style="margin: 0px " id="header_img" src="{{page.header_img}}"/><br>
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
<hr>

<h2>Paper</h2>
<p>Ahmet E Tekden, Marc P. Deisenroth, Yasemin Bekiroglu<br/>
<a href="{{page.pdf}}"><em>Neural Field Movement Primitives for Joint Modelling of Scenes and Motions</em></a></p>

<hr>

<h2>Interpolations between demonstrations</h2>

<p>Bilinear interpolation between embeddings of four demonstrations. Scene images for these demonstration are given on the each corresponding corner. </p>

<p> <b>Move the marker to see the scenes and motions generated for different embeddings.</b></p>
<div id="widget">
  <div class="demo_area row" style="margin: 1px ">
    <div class="col-4">
      <div class="row"><img id="demo_0" class="col" src="/assets/images/nfmp/demo_6.png"> </div>
      <div class="row"><img id="demo_0" class="col" src="/assets/images/nfmp/demo_0.png"> </div>
    </div>
    <div id ="interp_plane" class="col-4" style="top: 10px ">
      <div id="markerbounds">
        <div id="box">
          <div id="marker" class="is-hoverable" style="border: 3px solid black;"></div>
        </div>  
      </div>
      <br/>
    </div>
    <div class="col-4">
      <div class="row"><img id="demo_0" class="col" src="/assets/images/nfmp/demo_8.png"> </div>
      <div class="row"><img id="demo_0" class="col" src="/assets/images/nfmp/demo_2.png"> </div>
    </div>
  </div>

  <div id="image_titles" class="row">
    <h3 id="rgb_title" style="text-align: center" class="col-6"> Scene Function </h3>
    <h3 id="motion_title" style="text-align: center" class="col-6"> Motion Function </h3>
  </div>

  <div id="images" class="row">
    <img id="interp_rgb" class="col-6" src="/assets/images/nfmp/rgb_0.png">
    <img id="interp_mp" class="col-6" src="/assets/images/nfmp/mp_0.png">  
  </div>
</div>
<br>
<p> The scene function shows the reconstructed scene image. The motion function illustrates the corresponding minimum implicit cost value for each x and y indexes.</p>
<hr>
<h2>Supplementary Video</h2>

<div class="video">
    <iframe width="560" height="315" src="{{page.video}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br/><hr>

<h2>Code</h2>

<p>Code is coming soon.</p>
<br/>
<script type="text/javascript">
    var slider = {
      get_position: function() {
        var marker_pos = $('#marker').position();
        var left_pos = marker_pos.left + slider.marker_size / 2;
        var top_pos = marker_pos.top + slider.marker_size / 2;
        
        slider.position = {
          left: left_pos,
          top: top_pos,
          x: Math.round(slider.round_factor.x * (left_pos * slider.xmax / slider.width)) / slider.round_factor.x,
          y: Math.round((slider.round_factor.y * (slider.height - top_pos) * slider.ymax / slider.height)) / slider.round_factor.y,
        };

      },
      
      update_img: function(){
        index = slider.position.x * 6 + slider.position.y 
        document.getElementById("interp_rgb").src="/assets/images/nfmp/rgb_"+index.toString()+".png";
        document.getElementById("interp_mp").src="/assets/images/nfmp/mp_"+index.toString()+".png";
      },
      
      draw: function(x_size, y_size, xmax, ymax, marker_size, round_to) {
        
        if ((x_size === undefined) && (y_size === undefined) && (xmax === undefined) && (ymax === undefined) && (marker_size === undefined) && (round_to === undefined)) {
          x_size = 150;
          y_size = 150;
          xmax = 1;
          ymax = 1;
          marker_size = 20;
          round_to = 2;
        };
        
        slider.marker_size = marker_size;
        slider.height = y_size;
        slider.width = x_size;
        slider.xmax = xmax;
        slider.ymax = ymax;
        round_to = Math.pow(10, round_to);
        slider.round_factor = {
          x: round_to,
          y: round_to,
        };
        
        $("#markerbounds").css({
          "width": (x_size + marker_size).toString() + 'px',
          "height": (y_size + marker_size).toString() + 'px',
        });
        $("#box").css({
          "width": x_size.toString() + 'px',
          "height": y_size.toString() + 'px',
          "top": 15,
          "left": 15,
        });
        $("#marker").css({
          "width": marker_size.toString() + 'px',
          "height": marker_size.toString() + 'px',
        });
                
        $("#interp_plane").css({
          "width": (x_size + marker_size).toString() + 'px',
        });
        
        slider.get_position();
        
      },
      
    };
  $( document ).ready(function() {
    slider.draw(300,300,5,5,40,0);
    slider.update_img()
  });
  $("#marker").draggable({ 
      containment: "#markerbounds",
      drag: function() {
        slider.get_position();
        slider.update_img()
      },
  });  
</script>
