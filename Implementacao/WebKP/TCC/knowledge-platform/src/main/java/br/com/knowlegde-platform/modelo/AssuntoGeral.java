package br.com.knowl.platform.modelo;

import java.io.Serializable;

import javax.persistence.*;

@Entity
public class AssuntoGeral extends BaseEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2915539820566393198L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer idAssuntoGeral;
	@OneToOne
	@JoinColumn(name = "idUsuarioCriador")
	private Usuario usuarioCriador;
	@Column(name = "descricao")
	private String descricao;
	@Column(name = "flagDiscutido")
	private boolean flagDiscutido;

	public AssuntoGeral() {
		super();
	}

	/**
	 * @return the idAssuntoGeral
	 */
	public Integer getIdAssuntoGeral() {
		return idAssuntoGeral;
	}

	/**
	 * @param idAssuntoGeral
	 *            the idAssuntoGeral to set
	 */
	public void setIdAssuntoGeral(int idAssuntoGeral) {
		this.idAssuntoGeral = idAssuntoGeral;
	}

	/**
	 * @return the usuarioCriador
	 */
	public Usuario getUsuarioCriador() {
		return usuarioCriador;
	}

	/**
	 * @param usuarioCriador
	 *            the usuarioCriador to set
	 */
	public void setUsuarioCriador(Usuario usuarioCriador) {
		this.usuarioCriador = usuarioCriador;
	}

	/**
	 * @return the descricao
	 */
	public String getDescricao() {
		return descricao;
	}

	/**
	 * @param descricao
	 *            the descricao to set
	 */
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	/**
	 * @return the flagDiscutido
	 */
	public boolean isFlagDiscutido() {
		return flagDiscutido;
	}

	/**
	 * @param flagDiscutido
	 *            the flagDiscutido to set
	 */
	public void setFlagDiscutido(boolean flagDiscutido) {
		this.flagDiscutido = flagDiscutido;
	}

}
