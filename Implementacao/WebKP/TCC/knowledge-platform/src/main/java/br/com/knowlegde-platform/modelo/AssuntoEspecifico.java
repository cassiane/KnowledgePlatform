package br.com.knowl.platform.modelo;

import java.io.Serializable;

import javax.persistence.*;

@Entity
public class AssuntoEspecifico extends BaseEntity implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -7568900283969046190L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idAssuntoEspecifico; 
	@Column(name = "descricao")
	private String descricao;
	@OneToOne
	@JoinColumn(name = "idAssuntoGeral")
	private AssuntoGeral assuntoGeral;	
}
