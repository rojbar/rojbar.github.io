---
title: "Caldep Solver"
date: 2023-10-15T11:54:21-05:00
draft: false
summary: "Program restriction solver of match calendar tournament problem."
technologies: 
    - name: 'Minizinc'
      url: 'https://www.minizinc.org/'
urlrepo: 'https://github.com/rojbar/caldep-solver'
urldemo: 'https://rojbar.com/caldep-solver/'
imageSrc: 'imgs/caldep-solver.png'
---
There is a coming tournament and you need to setup a calendar so that each team
plays against each other two times, once as local and as visitor. Also, you must
take into account the cost of traveling between cities for each match in order
to reduce the costs. 


Solve that with caldep-solver!, define the amount of teams
cost of cities and caldep-solver will give you(probably) the best possible calendar
someone can find.

