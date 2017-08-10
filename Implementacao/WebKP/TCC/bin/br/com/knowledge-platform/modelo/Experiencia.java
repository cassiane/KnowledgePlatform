package br.com.knowl.platform.modelo;

import java.io.Serializable;

import javax.persistence.*;

@Entity 
public class Experiencia extends BaseEntity implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 9197305298784034607L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idExperiencia;
	@Column(name = "descricao")
	private String descricao;
}
