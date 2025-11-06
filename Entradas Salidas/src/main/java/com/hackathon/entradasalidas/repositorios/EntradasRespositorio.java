package com.hackathon.entradasalidas.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.entradasalidas.entidades.Entrada;

@Repository
public interface EntradasRespositorio extends JpaRepository<Entrada, Long> {
    
    List<Entrada> findTop10ByOrderByIdDesc();

}
