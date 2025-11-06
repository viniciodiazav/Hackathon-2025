package com.hackathon.entradasalidas.entidades;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "entradas")
public class Entrada {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String proveedor;

    private LocalDate fecha;

    private String codigoLote;

    private String modelo;

    private String talla;

    private String cantidad;

    public Entrada() {
    }

    public Entrada(String proveedor, LocalDate fecha, String codigoLote, String modelo, String talla, String cantidad) {
        this.proveedor = proveedor;
        this.fecha = fecha;
        this.codigoLote = codigoLote;
        this.modelo = modelo;
        this.talla = talla;
        this.cantidad = cantidad;
    }

    public long getId() {
        return id;
    }

    public String getProveedor() {
        return proveedor;
    }

    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public String getCodigoLote() {
        return codigoLote;
    }

    public void setCodigoLote(String codigoLote) {
        this.codigoLote = codigoLote;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getTalla() {
        return talla;
    }

    public void setTalla(String talla) {
        this.talla = talla;
    }

    public String getCantidad() {
        return cantidad;
    }

    public void setCantidad(String cantidad) {
        this.cantidad = cantidad;
    }

}
