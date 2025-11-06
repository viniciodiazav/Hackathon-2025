package com.hackathon.entradasalidas.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.entradasalidas.entidades.Entrada;
import com.hackathon.entradasalidas.entidades.Salida;
import com.hackathon.entradasalidas.repositorios.EntradasRespositorio;
import com.hackathon.entradasalidas.repositorios.SalidasRepositorio;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class ControladorRest {

    @Autowired
    private EntradasRespositorio repoEntradas;

    @Autowired
    private SalidasRepositorio repoSalidas;

    @GetMapping("/entradas")
    public List<Entrada> obtenerEntradas() {
        return repoEntradas.findAll();
    }

    @GetMapping("/ultimas10-entradas")
    public List<Entrada> obtener10Entradas() {
        return repoEntradas.findTop10ByOrderByIdDesc();
    }

    @PostMapping("/entrada")
    public Entrada crearEntrada(@RequestBody Entrada entrada) {
        return repoEntradas.save(entrada);
    }

    @PostMapping("/salida")
    public Salida crearSalida(@RequestBody Salida salida) {
        return repoSalidas.save(salida);
    }

    @GetMapping("/salidas")
    public List<Salida> obtenerSalidas() {
        return repoSalidas.findAll();
    }

    @GetMapping("/ultimas10-salidas")
    public List<Salida> obtener10Salidass() {
        return repoSalidas.findTop10ByOrderByIdDesc();
    }

}
