// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var toto = document.getElementsByClassName("type_course depth_3 contains_branch");
var i;
for (i = 0; i < toto.length; i++) {
  var teacherName = toto[i].getElementsByTagName('p')[0].getElementsByTagName('a')[0].innerHTML;
  var courseName = toto[i].getElementsByTagName('p')[0].getElementsByTagName('a')[0].title;
  courseName = pretifyCourseName(courseName);
  toto[i].getElementsByTagName('p')[0].getElementsByTagName('a')[0].innerHTML = courseName;
  toto[i].getElementsByTagName('p')[0].getElementsByTagName('a')[0].title = teacherName;
}

function pretifyCourseName(courseName) {
  if (courseName.includes("-")) {
    while(courseName.charAt(0) != '-') {
      courseName = courseName.substr(1);
    }
    courseName = courseName.substr(2);
  }
  courseName = courseName.toLowerCase();
  courseName = courseName.charAt(0).toUpperCase() + courseName.slice(1);
  return courseName;
}