cmake_minimum_required(VERSION 3.9)

project(mwm_diff)

set(SRC 
	main.cpp
	test.cpp
)

ADD_SUBDIRECTORY(pointer)
ADD_EXECUTABLE(demo.exe test.cpp)
