package com.hackathon.entradasalidas.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.entradasalidas.entidades.Salida;

@Repository
public interface SalidasRepositorio extends JpaRepository<Salida, Long> {
    
    List<Salida> findTop10ByOrderByIdDesc();    

}
