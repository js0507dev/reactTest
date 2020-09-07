package com.ls.lsblogsjs.backend.utils;

import org.modelmapper.ModelMapper;

public class ModelMapperUtil {
	private static ModelMapper modelMapper = new ModelMapper();
	
	public static ModelMapper get() {
		return modelMapper;
	}
}
